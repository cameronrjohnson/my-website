<script lang="ts">
  import Timeline from '$lib/components/about/timeline.svelte';
  import AboutMe from '$lib/components/about/aboutMeHeader.svelte';
  import { base } from '$app/paths';
  import { date } from 'yup';

  const events = [
    {
      title: 'Begining',
      message: 'Resolution Prototyping',
      image: `${base}/images/timeline-photos/Part_Square.jpeg`,
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
      image: `${base}/images/timeline-photos/Idaho_Square.jpeg`,
      date: 'Jan. 2024 - Current'
    },
    {
      title: 'Current',
      message: 'Photo about finding a job.',
      image: `${base}/images/timeline-photos/Clean_Square.jpeg`,
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
</style>

<div class="main">
<AboutMe />
<Timeline {events} />
</div>
