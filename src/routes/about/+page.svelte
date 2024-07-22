<script lang="ts">
  import Timeline from '$lib/components/about/timeline.svelte';
  import AboutMe from '$lib/components/about/aboutMeHeader.svelte';
  import { base } from '$app/paths';
  import { date } from 'yup';

  const events = [
    {
      title: 'Begining',
      message: 'My first expierence programming was when I built my own comapany called Resolution Prototyping. I learned how to use Wordpress and even a little bit of Javascript along the way. The company was a massive success but very quickly after the launch I became hooked on programming as a whole and wanted to know everything their is to know about it. The company site is still up to this day and I still am very proud of it but after dipping my toes into the world of software development I had to know more.',
      image: `${base}/images/timeline-photos/Res_Square.jpeg`,
      date: 'Jan. 2019 - Feb. 2020'
    },
    {
      title: 'Mobile Dev.',
      message: 'Benaswap',
      image: `${base}/images/timeline-photos/Flutter_Square.jpeg`,
      date: 'Feb. 2020 - Aug. 2020'
    },
    {
      title: 'Game Dev.',
      message: 'Photo about video games',
      image: `${base}/images/timeline-photos/Unity_Square.jpeg`,
      date: 'Aug. 2020 - Nov. 2021'
    },
    {
      title: 'Mission',
      message: 'Stuff about my mission',
      image: `${base}/images/timeline-photos/Mission_Square.JPG`,
      date: 'Nov. 2021 - Nov. 2023'
    },
    {
      title: 'College',
      message: 'Stuff about my college.',
      image: `${base}/images/timeline-photos/Idaho_High_Square.jpeg`,
      date: 'Jan. 2024 - Current'
    },
    {
      title: 'Current',
      message: 'Photo about finding a job.',
      image: `${base}/images/timeline-photos/Current_Square.jpeg`,
      date: 'Current'
    }
  ];
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about {
  padding: 30px;
}
</style>

<div class="main">
  <div class="about">
    <AboutMe />

  </div>
<Timeline {events} />
</div>
