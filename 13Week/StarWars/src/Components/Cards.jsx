
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Cards({item}) {
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={"https://www.bilimkurgukulubu.com/wp-content/uploads/2016/05/Resurgent-620x348.jpg"}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.model}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}