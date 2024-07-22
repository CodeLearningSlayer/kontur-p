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
          defaultBorderColor: "#447c31",
          defaultColor: "#447c31",
          defaultHoverBorderColor: "#447c31",
          defaultHoverColor: "#447c31"
        },
      }
    }}
  >
    {props.children}
  </ConfigProvider>
};

export const GlobalConfigProvider = GlobalConfigProviderElement
