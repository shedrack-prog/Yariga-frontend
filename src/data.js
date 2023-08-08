import dashboardIcon from './assets/icons/Dashboard.svg';
import propertyIcon from './assets/icons/UI icon/building.svg';
import reviewIcon from './assets/icons/UI icon/star.svg';
import agentIcon from './assets/icons/UI icon/person.svg';
import messagesIcon from './assets/icons/UI icon/message.svg';
import profileIcon from './assets/icons/UI icon/profile.svg';

import agentOne from './assets/Image/UIHUT.png';
import agentTwo from './assets/Image/studio-portrait-emotional-happy-funny-smiling-boyfriend-man-with-heavy-beard-stands-with-arms-crossed-dressed-red-t-shirt-isolated-blue 2.png';
import agentThree from './assets/Image/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign 1.png';
import agentFour from './assets/Image/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background 1.png';
import agentFive from './assets/Image/jason-briscoe-1BTCkaABIvg-unsplash 1.png';

import imgOne from './assets/Image/simone-hutsch-ULPybrxtM3s-unsplash 2-1.png';
// import imgTwo from './assets/image/image Sales-1.png';
// import imgThree from './assets/Image/image 9-1.png';
// import imgFour from './assets/image/imageSales.png.';

import propertyOne from './assets/Image/ralph-ravi-kayden-2d4lAQAlbDA-unsplash 1.png';
import propertyTwo from './assets/Image/ralph-ravi-kayden-vbSRUrNm3Ik-unsplash 1.png';
import propertyThree from './assets/Image/simone-hutsch-ULPybrxtM3s-unsplash 2.png';

import paymentIcon from './assets/icons/UI icon/wallet/light.svg';
import settingsIcon from './assets/icons/Setting 18.svg';
import bookingIcon from './assets/icons/Calender 18.svg';

export const navLinksData = [
  {
    id: 1,
    path: '/',
    text: 'Dashboard',
    icon: dashboardIcon,
  },

  {
    id: 2,
    path: '/properties',
    text: 'Property',

    icon: propertyIcon,
  },
  {
    id: 3,
    path: '/agents',
    text: 'Agent',
    icon: agentIcon,
  },
  {
    id: 4,
    path: '/reviews',
    text: 'Review',
    icon: reviewIcon,
  },
  {
    id: 5,
    path: '/messages',
    text: 'Message',
    icon: messagesIcon,
  },
  {
    id: 6,
    path: '/profile',
    text: 'Profile',
    icon: profileIcon,
  },
];

export const TotalRevenueSeries = [
  {
    name: 'Last Month',
    data: [183, 124, 115, 85, 143],
  },
  {
    name: 'Running Month',
    data: [95, 84, 72, 44, 108],
  },
];

export const TotalRevenueOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 2,
      horizontal: false,
      columnWidth: '90%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 0,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  },
  // yaxis: {
  //   title: {
  //     text: '$ (thousands)',
  //   },
  // },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val) {
        return `$ ${val} thousands`;
      },
    },
  },
};

export const PropertyRefData = [
  {
    id: 1,
    title: 'Social Media',
    color: '#6C5DD3',
    percentage: '64%',
  },
  {
    id: 2,
    title: 'Marketplaces',
    color: '#7FBA7A',
    percentage: '40%',
  },
  {
    id: 3,
    title: 'Websites',
    color: '#FFCE73',
    percentage: '50%',
  },
  {
    id: 4,
    title: 'Digital Ads',
    color: '#FFA2C0',
    percentage: '80%',
  },
  {
    id: 5,
    title: 'Others',
    color: '#F45252',
    percentage: '15%',
  },
];

export const topAgentsData = [
  {
    id: 1,
    name: 'Benny Chagur',
    title: 'Top Agent',
    img: agentOne,
  },
  {
    id: 2,
    name: 'Shedrack Tobiloba',
    title: 'Top Agent',
    img: agentTwo,
  },
  {
    id: 3,
    name: 'Benny Blanko',
    title: 'Top Agent',
    img: agentThree,
  },
  {
    id: 4,
    name: 'Hayda Shaheed',
    title: 'Top Agent',
    img: agentFour,
  },
  {
    id: 5,
    name: 'Michael Jordan',
    title: 'Top Agent',
    img: agentOne,
  },
];

export const customersChartOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  type: 'bar',
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    width: 1,
    colors: ['#fff'],
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr'],
  },

  yaxis: {},
};
export const customersChartSeries = [
  {
    data: [400, 430, 448, 470],
  },
];

export const LatestSalesData = [
  {
    id: 1,
    name: 'Metro Hotel',
    title: 'North Carolina, USA',
    img: imgOne,
    price: '$300',
  },
  {
    id: 2,
    name: 'Letdo Ji Hotel',
    title: 'Carolina North, UK',
    img: imgOne,
    price: '$550',
  },
  {
    id: 3,
    name: 'Star Sun Hotel',
    title: 'Maryland, Five Street',
    img: imgOne,
    price: '$980',
  },
  {
    id: 4,
    name: 'Five Label Hotel',
    title: 'Hosbone Road, Lagos.',
    img: imgOne,
    price: '$800',
  },
];

export const propertyListData = [
  {
    id: 1,
    name: 'Star Sun Hotel & Apartment',
    address: 'North Carolina, USA',
    img: propertyThree,
    price: 500,
  },
  {
    id: 2,
    name: 'Letdo Ji Hotel & Apartment',
    address: 'New York City, USA',
    img: propertyTwo,
    price: 400,
  },
  {
    id: 3,
    name: 'Metro Jayakar Apartment',
    address: 'North Carolina, USA',
    img: propertyThree,
    price: 800,
  },
];

export const notificationsData = [
  {
    id: 1,
    text: 'Your success an order payment from star sun appartment in the amount of $320',
    title: 'Payment Success',
    time: '10 minutes ago',
    icon: paymentIcon,
    bg: '#38B259',
  },
  {
    id: 2,
    text: 'The Apps application has made updates to improve services',
    title: 'Update Apps',
    time: '1 Jan',
    icon: settingsIcon,
    bg: '#006CE4',
  },
  {
    id: 3,
    text: 'You completed the order from star sun hotel and Appartment',
    title: 'Booking Success',
    time: '16 Sep',
    icon: bookingIcon,
    bg: '#EC4E2C',
  },
  {
    id: 4,
    text: 'Your success an order payment from Starsun appartment in the amount of $320',
    title: 'Payment Success',
    time: '10 minutes ago',
    icon: paymentIcon,
    bg: '#38B259',
  },
  {
    id: 5,
    text: 'The Apps application has made updates to improve services',
    title: 'Update Apps',
    time: '2 Jan',
    icon: settingsIcon,
    bg: '#006CE4',
  },
];
