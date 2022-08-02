import style from './style.module.scss'

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={style['layout-default']}>
      <header className={style['layout-default__header']}></header>
      <main className={style['layout-default__main']}>{children}</main>
      <footer className={style['layout-default__footer']}></footer>
    </div>
  )
}
