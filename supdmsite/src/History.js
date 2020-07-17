// google analytics
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';

ReactGA.initialize('UA-156453259-1');
ReactGA.pageview(window.location.pathname);


const history = createHistory();
history.listen((location) => {
  ReactGA.set({
    page: location.pathname,
  });
  ReactGA.pageview(location.pathname);
});

export default history;