import style from './style.module.scss'

export default function LayoutLogin({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={style['layout-login']}>
      <main className={style['layout-login__main']}>{children}</main>
    </div>
  )
}
