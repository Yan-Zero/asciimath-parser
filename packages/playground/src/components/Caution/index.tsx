import type { Component } from 'solid-js'
import { i18nFactory } from '~/i18n'

const Caution: Component = () => {
  const { t } = i18nFactory()
  return (
    <>
      <h2>{t('useStory.title')}</h2>
      <ul>
        <li innerHTML={t('useStory.web')}></li>
        <li innerHTML={t('useStory.obsidian')}></li>
        <li innerHTML={t('useStory.cli')}></li>
      </ul>
      <h2>{t('caution.title')}</h2>
      <ul>
        <li innerHTML={t('caution.diff')} />
        <li innerHTML={t('caution.deps')} />
      </ul>
    </>
  )
}

export {
  Caution,
}