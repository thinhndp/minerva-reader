import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import Slider from "react-slick";
import Carousel from 'nuka-carousel';

import { RatingBar } from '../../components/common/atoms';
import { BookInfoCard } from '../../components/common/molecules';
import { BookList, BookListSection } from '../../components/common/organisms';
import { Colors, Sizing } from '../../styles';
import { mockBooks, Book } from '../../utils/mock-books';
import { Author } from '../../utils/mock-authors';
import { Genre } from '../../utils/mock-genres';

const drawerWidth = Sizing.HOMEPAGE_DRAWER_WIDTH;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      border: "none"
    },
    icon: {
      fontSize: Sizing.NAVBAR_ICON_SIZE,
    },
    content: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }),
);

const HomePage = (props) => {
  const _mockBooks = mockBooks.slice(0, 12);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClick = () => {
    setOpen(!open);
  };

  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      variableWidth: true
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#EEEEEE",
        display: "flex",
        flexDirection: "row",
        minWidth: "0"
      }}
    >
      <div
        style={{ flex: 1, display: "flex", flexDirection: "row", minWidth: "0" }}
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>

          <BookListSection
            sectionTitle="You Might Like"
            buttonLabel="View All"
            wrapperStyle={{ padding: "0 30px", minWidth: "0" }}
            headerContainerStyle={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "1.15rem",
              fontWeight: "bold",
              padding: "15px 20px"
            }}
            buttonColor="linear-gradient(270deg, #7670FF 49.62%, #8B82FF 100%)"
          >
            {/* <Slider {...settings}>
              {
                mockBooks.map((book: Book, index: number) => (
                  <div style={{ margin: "10px", width: "500px" }}>
                    <BookInfoCard
                      title={book.title}
                      cover={book.cover}
                    />
                  </div>
                ))
              }
            </Slider> */}
            <Carousel
              slidesToShow={3}
              slidesToScroll="auto"
              cellSpacing={10}
              framePadding="0 20px"
            >
              {
                mockBooks.map((book: Book, index: number) => (
                  <div style={{width: "400px", height: "223px" }}>
                    <BookInfoCard
                      title={book.title}
                      cover={book.cover}
                    />
                  </div>
                ))
              }
            </Carousel>
          </BookListSection>
          <BookListSection
            sectionTitle="Popular Books"
            buttonLabel="View All"
            wrapperStyle={{ padding: "0 30px" }}
            headerContainerStyle={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "1.15rem",
              fontWeight: "bold",
              padding: "15px 20px"
            }}
            buttonColor="linear-gradient(270deg, #7670FF 49.62%, #8B82FF 100%)"
          >
            <BookList
              books={_mockBooks}
              wrapperStyle={{ justifyContent: "space-evenly" }}
              bookContainerStyle={{ width: "290px", margin: "5px" }}
            />
          </BookListSection>
        </div>
        <div
            style={{
              width: "80px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <IconButton onClick={handleDrawerClick}>
              <AccessibleForwardIcon className={classes.icon}/>
            </IconButton>
          </div>
        </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>Alo alo</div>
      </Drawer>
    </div>
  );
}

export default HomePage;