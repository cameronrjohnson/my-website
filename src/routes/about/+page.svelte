<script lang="ts">
  import Timeline from '$lib/components/about/timeline.svelte';
  import { base } from '$app/paths';

  // Test
  
  // Timeline events data
  const events = [
    {
      title: 'Beginning',
      message: `My journey into the world of programming began with the creation of my first company, Resolution Prototyping. I took on the challenge 
                of building a website from scratch using WordPress, while also integrating some JavaScript to enhance functionality. This initial 
                venture was not only a significant achievement but also ignited a profound passion for programming within me. The success of the company 
                encouraged me to dive deeper into the field, and I found myself eager to explore every facet of programming. Remarkably, Resolution Prototyping 
                continues to thrive to this day.`,
      image: `${base}/images/timeline-photos/Res_Square.jpeg`,
      date: 'Jan. 2019 - Feb. 2020'
    },
    {
      title: 'Mobile Dev.',
      message: `After gaining valuable experience with Resolution Prototyping, I turned my attention to mobile development. I was drawn to the Flutter framework, 
                which proved to be a powerful and user-friendly tool for building mobile applications. This new interest led me to develop my first app, Beneswap, 
                utilizing Flutter and Firebase as the database backend. Beneswap was designed to facilitate the exchange of everyday goods within smaller communities, 
                a need that became particularly relevant during the pandemic. This project deepened my appreciation for mobile development and further fueled my desire 
                to learn more.`,
      image: `${base}/images/timeline-photos/Flutter_Square.jpeg`,
      date: 'Feb. 2020 - Aug. 2020'
    },
    {
      title: 'Game Dev.',
      message: `With the foundational knowledge gained from my mobile development experience, I ventured into the realm of game development. My interest in video games 
                led me to create my first game, Jungle Jumper, which I published on the Google Play Store. This project was developed using the Flame plugin for Flutter, 
                a tool that allowed me to bring my game ideas to life. The success of Jungle Jumper inspired me to further expand my skill set by learning Unity and C#, 
                delving into more sophisticated game development techniques and exploring new creative possibilities.`,
      image: `${base}/images/timeline-photos/Unity_Square.jpeg`,
      date: 'Aug. 2020 - Nov. 2021'
    },
    {
      title: 'Mission',
      message: `In a significant shift from my programming pursuits, I embarked on a mission to serve the people of Honduras with The Church Of Jesus Christ Of Latter-Day Saints. 
                For two years, I dedicated myself to studying the scriptures, providing service, and sharing the teachings of the restored gospel of Jesus Christ in Spanish. 
                This immersive experience not only enriched my life but also honed my abilities to connect with people and work diligently in a variety of challenging situations.`,
      image: `${base}/images/timeline-photos/Mission_Square.JPG`,
      date: 'Nov. 2021 - Nov. 2023'
    },
    {
      title: 'College',
      message: `Following the conclusion of my mission, I was eager to continue my journey in the field of software development. I chose to pursue higher education at BYU-Idaho, 
                where I am currently working towards a bachelor's degree in computer science. The values of hard work and service that I embraced during my mission continue to 
                drive me as I navigate my academic and professional goals. I look forward to applying these lessons as I prepare for a career in software development, with 
                graduation expected in the fall of 2027.`,
      image: `${base}/images/timeline-photos/Idaho_High_Square.jpeg`,
      date: 'Jan. 2024 - Current'
    },
    {
      title: 'Current',
      message: `As I work towards my degree, I remain actively engaged in various projects and freelance work. Currently, I am revisiting and updating my earlier applications, 
                with plans to re-release them on the App Store and Play Store. Additionally, I am seeking remote opportunities as a software developer to further my professional 
                growth. My goal is to continue expanding my skill set while contributing to innovative projects. If you have any questions or would like to connect, please 
                feel free to reach out through this website!`,
      image: `${base}/images/timeline-photos/Current_Square.jpeg`,
      date: 'Current'
    }
  ];
</script>

<div class="flex flex-col items-center justify-center p-5 box-border h-[80vh] w-full">
  <Timeline {events} />
</div>
