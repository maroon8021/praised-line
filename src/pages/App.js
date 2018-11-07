import React from 'react'
import { connect } from 'react-redux';
// コメントreducerのactionを取得
import { load } from '../user'

// From material-ui
import { withStyles } from 'material-ui/styles'
import { AppBar,Toolbar, Avatar, Card, CardContent, Button, Dialog, DialogTitle, DialogContent } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Email } from 'material-ui-icons'


// connectのdecorator
@connect(
  state => ({
    // reducerで受け取った結果をpropsに返却する
    // comments: state.comment.comments
    users: state.user.users
  }),
  // actionを指定
  { load }
)
export default class App extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      open:false,
      user:null,
    }
  }

  handleClickOpen (user) {
    this.setState({
      open: true,
      user: user,
    })
  }

  handleRequestClose () {
    this.setState({ open: false })
  };


  componentWillMount() {
    // コメントのactionをキックする
    this.props.load()
  }

  render () {
    const { users } = this.props
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              タイトル
            </Typography>
          </Toolbar>
        </AppBar>
          {/* 配列形式で返却されるためmapで展開する */}
          {users && users.map((user) => {
            return (
                // ループで展開する要素には一意なkeyをつける（ReactJSの決まり事）
                <Card key={user.email} style={{marginTop:'10px'}}>
                  <CardContent style={{color:'#408040'}}>
                    <Avatar src={user.picture.thumbnail} />
                    <p style={{margin:10}}>{'名前:' + user.name.first + ' ' + user.name.last} </p>
                    <p style={{margin:10}}>{'性別:' + (user.gender == 'male' ? '男性' : '女性')}</p>
                    <div style={{textAlign: 'right'}} >
                      <Button onClick={() => this.handleClickOpen(user)}><Email/>メールする</Button>                    
                    </div>
                  </CardContent>
                </Card>                
            )
          })}        
          {
            this.state.open &&
            <Dialog open={this.state.open} onRequestClose={() => this.handleRequestClose()}>
              <DialogTitle>メールアドレス</DialogTitle>
              <DialogContent>{this.state.user.email}</DialogContent>
            </Dialog>
          }  
      </div>
    )
  }
}
