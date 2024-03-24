import { Search } from '@mui/icons-material'
import React from 'react'

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__searchIcon' />
        <input placeholder='キーワード検索' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>いまどうしてる？</h2>
        {/* ライブラリ追加 */}
      </div>
    </div>
  )
}

export default Widgets