// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

// MATERIAL UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StyledCard = styled(Card)`
  max-width: 30vw;
`;

const StyledCardMedia = styled(CardMedia)`
  width: 30vw;
  height: 140px;
`;

const ShoeCard = ({ shoe }) => {
  const test = () => {
    console.log('yay');
  };
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia image={shoe.photo_url} title="shoe" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {shoe.name}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {shoe.style}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {shoe.season}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={test}>
          Edit
        </Button>
      </CardActions>
    </StyledCard>
  );
  // return (
  //   <StyledCard>
  //     {}
  //     <div className="pic-container">
  //       <img src={shoeDoc.photo_url} alt="shoe" />
  //     </div>
  //     <div className="description-container">
  //       <h3>{shoeDoc.name}</h3>
  //       <div className="description-props">
  //         <div>
  //           <h5>Style: {shoeDoc.style}</h5>
  //           <h5>Season: {shoeDoc.season}</h5>
  //         </div>
  //         <div>
  //           <h5>Box: XX</h5>
  //           <button onClick={() => editShoeHandler(shoe)}>Edit</button>
  //         </div>
  //       </div>
  //     </div>
  //   </StyledCard>
  // );
};

export default ShoeCard;
