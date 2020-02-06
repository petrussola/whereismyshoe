// DEPENDENCIES
import React, { useContext } from 'react';
import styled from 'styled-components';

// MATERIAL UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

// CONTEXT
import ShoeContext from '../Contexts/ShoesContext';

const StyledCard = styled(Card)`
  max-width: 30vw;
`;

const StyledCardMedia = styled(CardMedia)`
  width: 30vw;
  height: 140px;
`;

const ShoeCard = ({ shoe }) => {
  const { editShoeHandler } = useContext(ShoeContext);
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia image={shoe.data.photo_url} title="shoe" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {shoe.data.name}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {shoe.data.style}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {shoe.data.season}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {shoe.data.has_heels ? 'Heels' : 'Flat sole'}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {shoe.data.is_boot ? 'Boot' : 'Low shoe'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Fab
          color="secondary"
          aria-label="edit"
          onClick={() => editShoeHandler(shoe)}
        >
          <EditIcon />
        </Fab>
      </CardActions>
    </StyledCard>
  );
};

export default ShoeCard;
