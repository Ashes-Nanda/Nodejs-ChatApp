import { MultiChatSocket, MultiChatWindow, MultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = MultiChatLogic('81f3120a-c9e4-455f-b211-93cc8613448a', props.user.username, props.user.secret);
     <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
}

export default ChatsPage