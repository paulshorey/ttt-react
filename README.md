#
# TTT Game Module
This ```ttt-react``` is the game. It can be imported into any React app. It will fit or grow to whatever width/height container you put it in. So, if you put it into a container that is 100% width/height of the screen, then the TTT game will be 100% of the screen. Otherwise, if you put it into a regular un-styled div, the game will be as small as possible.

#
# Instructions to run
```import TTT from '@pshorey/ttt-react'```
```
class App extends Component {
render() {
return (
<div style={{height:"400px"}}>
<TTT />
</div>
);
}
}
```

#
# This was implemented in:
(https://github.com/paulshorey/ttt-react-example)
