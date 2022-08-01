import style from './style.module.scss'

export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.default}>
      <header className={style.default__header}></header>
      <main className={style.default__main}>{children}</main>
      <footer className={style.default__footer}></footer>
    </div>
  )
}
