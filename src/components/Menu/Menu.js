import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Drawer, Button } from 'antd';
import {
  CloseOutlined,
  MenuOutlined
} from '@ant-design/icons';

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleToggle = () => setOpenMenu({
    visible: !openMenu.visible,
  })
  return (
    <>
    <div style={{ marginTop: 16, display: 'flex', justifyContent:'flex-end' }}>
        <Button onClick={handleToggle} icon={<MenuOutlined />} style={{marginRight: '20px'}} />
        </div>
        <Drawer
          title={
            <div style={{display: 'flex', justifyContent:'space-between'}}>
              <h2>Menu</h2>
              <Button onClick={handleToggle} icon={<CloseOutlined />} />
            </div>
          }
          placement="right"
          closable={false}
          onClose={handleToggle}
          visible={openMenu.visible}
          width='100%'
        >
          <Link href='/'>
            Home
          </Link>
        </Drawer>
    </>
  )
}

export default Menu
