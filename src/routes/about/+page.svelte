<script lang="ts">
  import Timeline from '$lib/components/about/timeline.svelte';
  import AboutMe from '$lib/components/about/aboutMeHeader.svelte';
  import { base } from '$app/paths';
  import { date } from 'yup';

  const events = [
    {
      title: 'Begining',
      message: 'This is the first event. This is the secondThis is the secondThis is the secondThis is the secondThis is the secondThis is the second',
      image: `${base}/images/test-image.jpeg`,
      date: 'Jan 2021 - Feb 2022'
    },
    {
      title: 'Mobile Dev.',
      message: 'This is the second event.This is the secondThis is the secondThis is the second',
      image: `${base}/images/test-image(1).jpeg`,
      date: ''
    },
    {
      title: 'Game Dev.',
      message: 'This is the third event.This is the secondThis is the secondThis is the secondThis is the secondThis is the secondThis is the second',
      image: `${base}/images/test-image(2).jpeg`,
      date: ''
    },
    {
      title: 'Mission',
      message: 'This is the third event.',
      image: `${base}/images/test-image.jpeg`,
      date: ''
    },
    {
      title: 'College',
      message: 'This is the third event.',
      image: `${base}/images/test-image(1).jpeg`,
      date: ''
    },
    {
      title: 'Current',
      message: 'This is the third event.',
      image: `${base}/images/test-image(2).jpeg`,
      date: ''
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
