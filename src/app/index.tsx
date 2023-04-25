/**
 *
 * App
 *
 * This component is the snowball around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from "react-helmet-async";
import { Switch, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFound/Loadable";
import { useTranslation } from "react-i18next";
import { translations } from "locales/i18n";
import { BlockChain } from "./containers/BlockChain/Loadable";
import { AppPages } from "./types";
import Layout from "./Layout";
import { useGlobalSlice } from "app/containers/global/slice";
import { GlobalModals } from "./components/modals";
import { HomePage } from "./pages/Home/Loadable";
import { PlaygroundPage } from "./pages/playground";
import { InProgressPage } from "./pages/inProgress";
import { LastDropsPage } from "./pages/LastDrops";

export function App() {
  const { t } = useTranslation();
  useGlobalSlice();

  return (
    <>
      <Helmet
        titleTemplate="%s - Rithm"
        defaultTitle={t(translations.HomePage.home())}
      >
        <meta name="description" content="Rithm" />
      </Helmet>
      <GlobalModals />
      <BlockChain />

      <Layout>
        <Switch>
          <Route exact path={AppPages.RootPage} component={HomePage} />
          <Route path={AppPages.PlaygroundPage} component={PlaygroundPage} />
          <Route path={AppPages.InProgressPage} component={InProgressPage} />
          <Route path={AppPages.LastDrops} component={LastDropsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </>
  );
}
