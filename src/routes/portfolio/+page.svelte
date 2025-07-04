<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="flex flex-col md:flex-row gap-10 justify-center items-center w-full p-5 box-border">
  <!-- Resume Container -->
  <div class="p-6 md:p-12 rounded-xl flex flex-col justify-between items-center transition-transform duration-300 ease-in-out  hover:scale-105 max-w-md w-full h-[60vh] md:h-[80vh] flex-1">
    <div class="text-center flex flex-col items-center h-full">
      <a href="{base}/images/Cameron_Johnson_Resume.pdf" download="Cameron_Johnson_Resume">
        <img 
          src="{base}/images/Cameron_Johnson_Resume.jpg" 
          alt="Cameron_Johnson_Resume" 
          class="object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg max-w-[80%] max-h-[60%]" 
        />
      </a>
    </div>
  </div>

  <!-- Skills Container -->
  <div class="bg-yellow-100 p-5 md:p-8 rounded-xl flex flex-col justify-between items-center max-w-md w-full flex-1">
    <div class="text-left w-full">
      <h1 class="text-2xl md:text-3xl font-bold text-black mb-4">Here are a few of my skills</h1>

      <h2 class="text-lg md:text-xl font-semibold text-black mb-2">- Mobile Development -</h2>
      <ul class="list-disc list-inside pl-4 text-black mb-4">
        <li>Dart, Swift, Java</li>
        <li>Flutter, Flame, Bonfire</li>
      </ul>

      <h2 class="text-lg md:text-xl font-semibold text-black mb-2">- Web Development -</h2>
      <ul class="list-disc list-inside pl-4 text-black mb-4">
        <li>Tailwind, JavaScript, Sveltekit</li>
        <li>WordPress, Google Ads</li>
      </ul>

      <h2 class="text-lg md:text-xl font-semibold text-black mb-2">- Game Development -</h2>
      <ul class="list-disc list-inside pl-4 text-black mb-4">
        <li>C#, Unity, Blender</li>
      </ul>

      <h2 class="text-lg md:text-xl font-semibold text-black mb-2">- Other -</h2>
      <ul class="list-disc list-inside pl-4 text-black">
        <li>Python, Firebase, Supabase, Git</li>
      </ul>
    </div>
  </div>
</div>
