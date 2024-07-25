import { ConfigProvider } from 'antd';
import { ReactElement } from 'react';

interface GlobalConfigProviderProps {
  children: ReactElement
}

const GlobalConfigProviderElement = (props: GlobalConfigProviderProps) => {
  return <ConfigProvider
    theme={{
      components: {
        Button: {
          defaultBorderColor: "#000000",
          defaultColor: "#000000",
          defaultHoverBorderColor: "#000000",
          defaultHoverColor: "#000000"
        },
      }
    }}
  >
    {props.children}
  </ConfigProvider>
};

export const GlobalConfigProvider = GlobalConfigProviderElement
