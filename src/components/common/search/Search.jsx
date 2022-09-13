import css from './search.module.scss'



export const Search = () => {
  return(
    <div className={css.search}>
      <span>🔍</span>
      <input  className={css.root} placeholder="Поиск..."/>
      <p>✖</p>
    </div>
  )
}