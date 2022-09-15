import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  AppBar,
  InputBase,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
  Tabs,
  MenuItem,
  Tab,
  Grid,
  MenuList,
  ListItemText,
  Paper,
  List,
  ListItem,
  SwipeableDrawer,
  Collapse,
} from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useTheme } from '@material-ui/styles';

const menuList = [
  {
    id: '0',
    title: 'موبایل',
    childs: [
      'اپل',
      'سامسونگ',
      'شیائومی',
      'هواوی',
      'وان پلاس',
      'نوکیا',
      'موتورولا',
      'الجی',
      'جی ال ایکس',
    ],
  },
  {
    id: '1',
    title: 'لپ تاپ',
    childs: ['ایسوس', 'لنوو', 'مک', 'اچ پی', 'سونی', 'دل', 'ایسر'],
  },
  {
    id: '2',
    title: 'پوشاک',
    childs: [
      'لباس مردانه',
      'لباس زنانه',
      'کفش مردانه',
      'کفش زنانه',
      'اکسسوری مردانه',
      'اکسسوری زنانه',
    ],
  },
  {
    id: '3',
    title: 'لوازم بهداشتی و آرایشی',
    childs: [
      'شامپو',
      'صابون',
      'کرم',
      'اسپری',
      'عطر',
      'لوازم شخصی برقی',
      'مسواک',
      'سایر',
    ],
  },
  {
    id: '4',
    title: 'تلویزیون',
    childs: [
      'الجی',
      'سامسونگ',
      'شیائومی',
      'جی پلاس',
      'ایکس ویژن',
      'شهاب',
      'پارس',
      'ایوولی',
    ],
  },
  {
    id: '5',
    title: 'یخچال',
    childs: ['الجی', 'سامسونگ', 'شیائومی', 'امرسان', 'ارج', 'بوش'],
  },
  {
    id: '6',
    title: 'لباسشویی',
    childs: ['الجی', 'سامسونگ', 'بوش', 'شیائومی'],
  },
  {
    id: '7',
    title: 'ورزشی',
    childs: ['کفش ورزشی', 'لباس ورزشی', 'کوله پشتی', 'توپ', 'ابزار ورزشی'],
  },
  {
    id: '8',
    title: 'سفر',
    childs: ['چادر', 'کیسه خواب', 'لباس', 'کوله پشتی', 'کفش'],
  },
];

const useStyles = makeStyles((theme) => ({
  // ...

  '@global': {
    // ... global styles here

    body: {
      margin: 0,
    },
  },

  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',

    fontSize: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    transition: 'all ease .2s',
    backgroundColor: alpha(theme.palette.grey[600], 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.grey[700], 0.25),
      color: theme.palette.common.orange,
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '40%',
      padding: '8px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '3px',
    },
  },
  searchIcon: {
    marginTop: '8px',
    padding: theme.spacing(0, 2),
    height: '100%',
    //position: 'absolute',
    pointerEvents: 'none',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  button: {
    '&:hover': {
      color: theme.palette.common.orange,
    },
  },
  tab: {
    '&:hover': {
      color: theme.palette.common.orange,
    },
  },

  menuItem: {
    '&:hover': {
      color: theme.palette.common.orange,
    },
  },
  drawerIcon: {
    height: '30px',
    width: '30px',
  },
  listItem: {
    color: theme.palette.common.black,
    '&:hover': {
      color: theme.palette.common.orange,
      backgroundColor: theme.palette.grey[200],
    },
  },
  nestedListItem: {
    color: theme.palette.common.black,

    marginRight: theme.spacing(4),
    '&:hover': {
      color: theme.palette.common.orange,
      backgroundColor: theme.palette.grey[100],
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState(1);
  const [isShown, setIsShown] = useState();
  const [shownList, setShownList] = useState();
  const [open, setOpen] = useState();

  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleHover = (e) => {
    setIsShown(true);
    const list = menuList?.filter((item) => item.id == e.target.id)[0].childs;
    const renderedList = list.map((li, index) => {
      return (
        <Paper
          key={index}
          className={classes.menu}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <MenuList>
            <MenuItem className={classes.menuItem}>{li}</MenuItem>
          </MenuList>
        </Paper>
      );
    });
    setShownList(renderedList);
  };

  const tabs = (
    <Grid item>
      <div dir="ltr" style={{ width: '60%' }}>
        <Tabs
          value={value}
          variant="scrollable"
          indicatorColor="secondary"
          onChange={handleChange}
        >
          {menuList?.map((item, index) => {
            return (
              <Tab
                className={classes.tab}
                id={item.id}
                key={index}
                label={item.title}
                onMouseEnter={handleHover}
                onMouseLeave={() => setIsShown(false)}
              />
            );
          })}
        </Tabs>
      </div>
    </Grid>
  );

  const handleClickExpad = (e) => {
    if (open == e.target.id) {
      setOpen('');
    } else {
      setOpen(e.target.id);
    }
  };

  const drawer = (
    <>
      <IconButton
        disableRipple
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
      <SwipeableDrawer
        anchor={'right'}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
      >
        <List disablePadding>
          <ListItem>
            <Typography
              className={classes.title}
              variant="h6"
              color="primary"
              noWrap
            >
              فروشگاه ری اکت
            </Typography>
          </ListItem>
          {menuList.map((item, index) => {
            return (
              <>
                <ListItem key={index} className={classes.listItem}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <ListItem
                        className={classes.listItem}
                        component={Link}
                        to="/ss"
                      >
                        <ListItemText primary={item.title} />
                      </ListItem>
                    </Grid>
                    <Grid item>
                      <IconButton
                        disableRipple
                        disableFocusRipple
                        size="small"
                        onClick={handleClickExpad}
                      >
                        {open == item.id ? (
                          <ExpandLess id={item.id} />
                        ) : (
                          <ExpandMore id={item.id} />
                        )}
                      </IconButton>
                    </Grid>
                  </Grid>
                </ListItem>
                <Collapse in={open == item.id} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item?.childs.map((li, index) => {
                      return (
                        <ListItem
                          key={index}
                          className={classes.nestedListItem}
                          component={Link}
                          to="/"
                          style={{ textAlign: 'right', fontSize: '5px' }}
                        >
                          <ListItemText primary={li} />
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </>
            );
          })}
        </List>
      </SwipeableDrawer>
    </>
  );

  return (
    <>
      <AppBar className={classes.appBar} color="transparent">
        <Grid container>
          <Grid item style={{ width: '100%' }}>
            <Toolbar>
              <Typography
                className={classes.title}
                variant="h6"
                color="primary"
                noWrap
              >
                فروشگاه ری اکت
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="جست و جو..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div className={classes.grow} />

              <Button
                variant="outlined"
                className={classes.button}
                endIcon={<LockOpenIcon style={{ marginRight: '8px' }} />}
                component={Link}
                to="/login"
              >
                {matchesSM ? null : 'ورود | ثبت نام'}
              </Button>
              <IconButton className={classes.button}>
                <AddShoppingCartIcon />
              </IconButton>
            </Toolbar>
          </Grid>
          {matchesSM ? drawer : tabs}
        </Grid>
        {isShown ? shownList : null}
      </AppBar>

      <div style={{ height: '1000px' }}>s</div>
    </>
  );
}
