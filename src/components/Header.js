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
} from '@material-ui/core';

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
    id: '0',
    title: 'لپ تاپ',
    childs: ['ایسوس', 'لنوو', 'مک', 'اچ پی', 'سونی', 'دل', 'ایسر'],
  },
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
    title: 'یخچال',
    childs: ['الجی', 'سامسونگ', 'شیائومی', 'امرسان', 'ارج', 'بوش'],
  },
  {
    id: '5',
    title: 'لباسشویی',
    childs: ['الجی', 'سامسونگ', 'بوش', 'شیائومی'],
  },
  {
    id: '6',
    title: 'ورزشی',
    childs: ['کفش ورزشی', 'لباس ورزشی', 'کوله پشتی', 'توپ', 'ابزار ورزشی'],
  },
  {
    id: '7',
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
  appBar: {
    backgroundColor: theme.palette.common.orange,
    margin: 'auto',
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
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState(1);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="fixed" color={theme.palette.common.white}>
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
          <Grid item alignContent="start" alignItems="start">
            <Tabs
              value={value}
              indicatorColor="secondary"
              onChange={handleChange}
            >
              {menuList.map((item) => {
                return (
                  <>
                    <Tab key={item.id} label={item.title} />
                    <MenuList>
                      {item.childs.map((child) => {
                        return <MenuItem>{child}</MenuItem>;
                      })}
                    </MenuList>
                  </>
                );
              })}
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>

      <div style={{ height: '1000px' }}>s</div>
    </>
  );
}
