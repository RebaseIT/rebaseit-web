<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <Head>
    <Title>{{ t('thankYou.title') }}</Title>
  </Head>
  <ReSectionContainer
    class="py-8"
    background="/images/background/background-2.png"
  >
    <div class="h-full flex flex-column align-items-center justify-content-center">
      <ReTitleGradient class="my-8">
        {{ t('thankYou.thanksForReaching') }}
      </ReTitleGradient>
      <ReTitleSpan color="black">
        {{ t('thankYou.beInTouch') }}
      </ReTitleSpan>
      <NuxtLink to="/">
        <ReButton
          class="my-8"
          :label="t('thankYou.goHome')"
        />
      </NuxtLink>
    </div>
  </ReSectionContainer>
</template>
