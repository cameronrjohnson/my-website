<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let temperature: number | null = null;
  let humidity: number | null = null;
  let createdAt: string | null = null;
  let formattedTime: string = '—';
  let loading: boolean = true;
  let error: string | null = null;
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

  async function fetchData() {
    loading = true;
    error = null;
    try {
      const res = await fetch(
        'https://cyrcynjzdmdtfteeqalp.supabase.co/rest/v1/Temps?select=temperature,humidity,created_at&order=created_at.desc&limit=1',
        {
          headers: {
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5cmN5bmp6ZG1kdGZ0ZWVxYWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMTgyNzMsImV4cCI6MjA3Nzg5NDI3M30.q70xOxGISwhVTB2OFh3lYpbNoQOl7P3x9IFP_mQo3Ic',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5cmN5bmp6ZG1kdGZ0ZWVxYWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMTgyNzMsImV4cCI6MjA3Nzg5NDI3M30.q70xOxGISwhVTB2OFh3lYpbNoQOl7P3x9IFP_mQo3Ic'
          }
        }
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
    } catch (e: unknown) {
      error = e instanceof Error ? e.message : String(e);
    } finally {
      loading = false;
    }
  }

  let intervalId: ReturnType<typeof setInterval> | null = null;
  onMount(() => {
    fetchData();
    intervalId = setInterval(fetchData, 15000);
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<section class="p-6 flex flex-col justify-center items-center bg-#262730">
  <h2 class="text-4xl font-extrabold mb-6 text-white-800 dark:text-white-100 text-center">Dumpy Data</h2>

  {#if loading}
    <p class="text-lg text-white-800 dark:text-white-100">Loading latest reading…</p>
  {:else}
    {#if error}
      <p class="text-lg text-red-600 dark:text-red-400">Error: {error}</p>
    {:else}
      <div class="dark:bg-gray-800 shadow-2xl rounded-xl p-12 w-full max-w-xl">
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

        <div class="mt-6 text-base text-gray-500 dark:text-gray-400 text-center">
          <strong>Received:</strong> {formattedTime}
        </div>
      </div>
      <div class="p-5">

      </div>
      Camera / Feeder Coming Soon...
    {/if}
  {/if}
</section>
