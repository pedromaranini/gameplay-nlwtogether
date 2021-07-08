import React from 'react';
import { 
    Text, 
    View,
    Image, 
    StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  return (
    <View style={styles.container}>
        <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
            {/* {`\n`} Quebra de linha */}
            Conecte-se e {`\n`}
            organize suas {`\n`}
            jogatinas
        </Text>
        <Text style={styles.subTitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos 
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.9}
        />

      </View>

    </View>
  );
}

