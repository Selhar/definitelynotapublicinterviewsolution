/**
 * This is the history of messages inside a chat room
 */
import React from 'react'
import PropTypes from 'prop-types'

import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
import Paragraph from 'grommet/components/Paragraph'

import styled from 'styled-components'
import bootstrap from 'app/lib/bootstrap'

const ChatBox = styled(Box)`
 flex-basis: auto;
 overflow-y: scroll;
 height: 1px;
`

const StyledAuthor = styled(Label)`
  margin: 0;
`

const StyledMessage = styled(Paragraph)`
  margin: 0;
`

class MessageHistory extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const { messages } = this.props;
    return(
      <ChatBox pad='medium' flex='grow'>
        { messages.length === 0 ? 'No one talking here yet :(' : (
            messages.map(({ id, author, message }) => (
              <Box key={ id } pad='small' credit={ author }>
                <StyledAuthor>{ author }</StyledAuthor>
                <StyledMessage>{ message }</StyledMessage>
              </Box>
            ))
          )
        }
      </ChatBox>
    )
  };
}

MessageHistory.propTypes = {
}

export default bootstrap(MessageHistory)
