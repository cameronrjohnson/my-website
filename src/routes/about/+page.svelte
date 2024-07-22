<script lang="ts">
  import Timeline from '$lib/components/about/timeline.svelte';
  import AboutMe from '$lib/components/about/aboutMeHeader.svelte';
  import { base } from '$app/paths';

  const events = [
    {
      title: 'Beginning',
      message: `My first experience programming was when I built my first company called Resolution Prototyping. 
                I built the website with WordPress and even a little bit of JavaScript along the way. 
                The company was a massive success, but very quickly after the launch, I became hooked on programming 
                as a whole and wanted to know everything there is to know about it. 
                The company site is still up to this day, and I am still very proud of it.`,
      image: `${base}/images/timeline-photos/Res_Square.jpeg`,
      date: 'Jan. 2019 - Feb. 2020'
    },
    {
      title: 'Mobile Dev.',
      message: `After Resolution Prototyping, I began to experiment with mobile development and found that the Flutter 
                framework is very easy to pick up and a really powerful tool when it comes to creating the user interface. I continued
                to learn more and more and created my first app using Flutter and Firebase as a database. The app was called Benaswap and 
                was used to help trade common goods in smaller communities during the pandemic.`,
      image: `${base}/images/timeline-photos/Flutter_Square.jpeg`,
      date: 'Feb. 2020 - Aug. 2020'
    },
    {
      title: 'Game Dev.',
      message: `Benaswap helped me learn so much about programming but afterwards I got bored and started working on more complex 
                projects. I quickly became more interested in video games and released my very first game called Jungle Jumper on Google Play Store.
                This was built with another plugin called Flame that works on top of Flutter. I then moved to the Unity game engine
                and started learning C#.`,
      image: `${base}/images/timeline-photos/Unity_Square.jpeg`,
      date: 'Aug. 2020 - Nov. 2021'
    },
    {
      title: 'Mission',
      message: `Shortly after I had graduated high school, I made the decision to go serve the wonderful people of Honduras as 
                a missionary for The Church Of Jesus Christ Of Latter-Day Saints. I was in various parts of Honduras for a total of 2 years.
                From 6:30 in the morning until 10:30 at night I was studying the scriptures, serving, and teaching about the restored gospel 
                of Jesus Christ in the Spanish language.`,
      image: `${base}/images/timeline-photos/Mission_Square.JPG`,
      date: 'Nov. 2021 - Nov. 2023'
    },
    {
      title: 'College',
      message: `I had learned a lot about working hard and what it means to serve others on my mission, but when the two years
                were up, I knew I had to further my skills in software development. I chose to go to BYU-Idaho. Here in Idaho, I really hope 
                to learn what it means to be a software developer. Right now I am set to graduate in the fall of 2027 with a bachelor's degree
                in computer science.`,
      image: `${base}/images/timeline-photos/Idaho_High_Square.jpeg`,
      date: 'Jan. 2024 - Current'
    },
    {
      title: 'Current',
      message: `Until I graduate, I plan on keeping myself busy with homework and some personal projects. Right now I am in the process 
                of going back to my old applications and updating all of the code and publishing it again on the App Store and Play Store. I also
                am doing freelance work and am currently looking for a remote job as a software developer. If you have any questions about any of
                this, please feel free to contact me through this website!`,
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
