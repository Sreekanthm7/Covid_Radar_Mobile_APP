import {useEffect, useState} from 'react';
import {useAuthentication} from '../../hooks/useAuthentication';
import {FullScreenBrand} from '../FullScreenBrand';

type Props = {
  children: React.ReactElement;
};

export default function AuthContainer(props: Props) {
  const {initialiseAuthState} = useAuthentication();
  const [isReady, setIsReady] = useState(false);

  const initialise = async () => {
    await initialiseAuthState();
    setIsReady(true);
  };

  useEffect(() => {
    initialise();
  }, [isReady]);

  if (!isReady) {
    return <FullScreenBrand />;
  } else {
    return props.children;
  }
}
