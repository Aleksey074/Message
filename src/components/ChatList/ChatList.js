import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import "./ChatList.css";

export function ChatList({ sx = [], chatList }) {
  return (
    <List 
      className="list-main-itm"
      sx={{
        borderRight: 1,
        ...sx,
      }}
    >
      {chatList.map(({ id, name }) => (
        <ListItem key={id} button>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
}