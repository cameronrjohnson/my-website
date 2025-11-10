<script lang="ts">
  import { onMount } from 'svelte';

  let temperature: number | null = null;
  let humidity: number | null = null;
  let createdAt: string | null = null;
  let formattedTime: string = '—';
  let loading: boolean = true;
  let error: string | null = null;
  let imageUrl: string | null = null;
  let imageLoading: boolean = true;
  let imageError: string | null = null;

  function toEven(num: number | null): number | string {
    if (num === null) return '—';
    return Math.round(num / 2) * 2;
  }

  function formatTimestamp(ts: string | null): string {
    if (!ts) return 'Unknown';
    const d = new Date(ts);
    if (isNaN(d.getTime())) return ts;
    return d.toLocaleString();
  }

  const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5cmN5bmp6ZG1kdGZ0ZWVxYWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMTgyNzMsImV4cCI6MjA3Nzg5NDI3M30.q70xOxGISwhVTB2OFh3lYpbNoQOl7P3x9IFP_mQo3Ic';
  const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`
  };

  async function fetchDataAndImage() {
    loading = true;
    imageLoading = true;
    error = null;
    imageError = null;

    try {
      // ---- Fetch sensor data ----
      const res = await fetch(
        'https://cyrcynjzdmdtfteeqalp.supabase.co/rest/v1/Temps?select=temperature,humidity,created_at&order=created_at.desc&limit=1',
        { headers }
      );

      if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
      const data = await res.json();

      if (data && data.length > 0) {
        const row = data[0];
        temperature = row.temperature ?? null;
        humidity = row.humidity ?? null;
        createdAt = row.created_at ?? null;
        formattedTime = formatTimestamp(createdAt);
      } else {
        temperature = null;
        humidity = null;
        createdAt = null;
        formattedTime = 'No data';
      }

      // ---- Fetch image ----
      imageUrl = `https://cyrcynjzdmdtfteeqalp.supabase.co/storage/v1/object/public/live/latest.jpg?t=${Date.now()}`;

    } catch (e: unknown) {
      error = e instanceof Error ? e.message : String(e);
      imageError = error;
      imageUrl = null;
    } finally {
      loading = false;
      imageLoading = false;
    }
  }

  onMount(() => {
    // Initial fetch
    fetchDataAndImage();

    // Refresh both every 10 seconds
    const intervalId = setInterval(fetchDataAndImage, 5000);

    return () => clearInterval(intervalId);
  });
</script>

<section class="p-6 flex flex-col justify-center items-center bg-#262730">
  <h2 class="text-4xl font-extrabold mb-6 text-white-800 dark:text-white-100 text-center">Frog Cam</h2>

  <div class="w-full max-w-xl">
    <!-- Live Camera Feed -->
    <div class="dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
      {#if imageLoading && !imageUrl}
        <div class="h-64 flex items-center justify-center">
          <p class="text-lg text-white-800 dark:text-white-100">Loading camera feed…</p>
        </div>
      {:else if imageError}
        <div class="h-64 flex items-center justify-center">
          <p class="text-lg text-red-600 dark:text-red-400">Failed to load camera feed: {imageError}</p>
        </div>
      {:else if imageUrl}
        <img
          src={imageUrl}
          alt="Live camera feed"
          class="w-full h-auto object-cover"
          on:error={() => { imageError = 'Failed to load image'; imageUrl = null; }}
        />
      {/if}

      <!-- Sensor Readings -->
      <div class="p-8 border-t border-gray-700">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            <div class="text-center md:text-left">
              <p class="text-xl font-semibold text-white-800 dark:text-white-100">Temperature</p>
              <p class="text-5xl font-bold text-blue-600 dark:text-blue-400">{toEven(temperature)}°F</p>
            </div>

            <div class="text-center md:text-right">
              <p class="text-xl font-semibold text-white-800 dark:text-white-100">Humidity</p>
              <p class="text-5xl font-bold text-green-600 dark:text-green-400">{toEven(humidity)}%</p>
            </div>
          </div>

          <div class="mt-4 text-base text-gray-500 dark:text-gray-400 text-center">
            <strong>Received:</strong> {formattedTime}
          </div>
      </div>
    </div>
  </div>
</section>
