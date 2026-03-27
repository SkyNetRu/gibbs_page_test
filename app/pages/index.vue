<template>
  <div class="bg-[#000504] min-h-screen">
    <SectionsNavigation />
    <main>
      <SectionsHero />
      <div v-aos data-aos="zoom-down">
        <SectionsLivePayouts />
      </div>
      <div v-aos data-aos="zoom-down">
        <SectionsHowYouLearn />
      </div>
      <div v-aos data-aos="zoom-down">
        <SectionsSimFiExperience />
      </div>
      <div v-aos data-aos="zoom-down">
        <SectionsAccountSelection />
      </div>
      <div v-aos data-aos="zoom-down">
        <SectionsCertificationPath />
      </div>
      <div v-aos data-aos="zoom-down">
        <SectionsBuiltForPerformance />
      </div>
      <div v-aos data-aos="zoom-down">
        <SectionsRulesPayouts />
      </div>
      <div v-aos data-aos="zoom-down">
        <SectionsFaq />
      </div>
      <div v-aos data-aos="zoom-down">
        <SectionsReadyToStart />
      </div>
    </main>
    <SectionsFooter />
  </div>
</template>
