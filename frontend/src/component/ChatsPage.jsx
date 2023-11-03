// import { PrettyChatWindow} from 'react-chat-engine-pretty'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => { 
  const chatProps = useMultiChatLogic(
    '32e3959f-e6b9-425c-9e65-e5c61e7f5700',
    props.user.username,
    props.user.secret
  )
  return (
      <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
      </div>
    )
  };
  export default ChatsPage;