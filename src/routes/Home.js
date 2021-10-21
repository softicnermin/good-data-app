import React from "react";
import * as Md from '../md/full'
import { BarChart } from "@gooddata/sdk-ui-charts";
import { InsightView } from "@gooddata/sdk-ui-ext";
import Page from "../components/Page";

const Home = () => {
    return <Page>
        <div style={{ height: 400 }}>
            <BarChart measures={[Md.Spend.Sum]} viewBy={Md.Category} />
        </div>

        <div style={{ height: 400 }}>
            <InsightView
                insight={Md.Insights.Insight1}
            />
        </div>

    </Page>;
};

export default Home;
