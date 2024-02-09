import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#7B66FF',
    colorError: '#DF826C'
  },
  components: {
    Form: {
      fontSize: 14
    },
    Dropdown: {
      colorTextBase: "#88888"
    }
  }
};

export default theme;