import Avatar from '@/components/avatar'
import Email from '@/components/email'
import { Header } from '@/components/header'
import MenuButton from '@/components/menu-button'
import { EMAILS } from '@/utils/emails'
import { FlatList, View, Text } from 'react-native'

export default function Home() {
    return (
    <View className='flex-1 bg-gray-900 pt-16 p-4'>
        <Header>
            <MenuButton />
            <Header.Field placeholder='Pesquisar no e-email'/>
            <Avatar source={{ uri: 'https://github.com/renamcomn.png' }} size='small' />
        </Header>

        <FlatList
            data={EMAILS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Email data={item} />}
            contentContainerClassName="gap-6"
            ListHeaderComponent={() => (
            <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
                Entrada
            </Text>
            )}
        />
        
    </View>
    )
}