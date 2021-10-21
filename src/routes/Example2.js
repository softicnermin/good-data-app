import React, { useState } from "react";
import * as Md from '../md/full'
import { BarChart } from "@gooddata/sdk-ui-charts";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model";
import Page from "../components/Page";

const filters1 = [
    newPositiveAttributeFilter(Md.Category, ['Advertising', 'Event', 'Social']),
];

const filters2 = [
    newPositiveAttributeFilter(Md.Category, ['Event', 'Social']),
];

const socexFilter = [
    newPositiveAttributeFilter(Md.Category, ['Socex']),
];

const Home = () => {
    const [filters, setFilters] = useState(filters1);

    return <Page>
        <div style={{ height: 400 }}>
            <BarChart
                measures={[Md.Spend.Sum]}
                viewBy={Md.Category}
                filters={filters}
            />
        </div>

        <div style={{ height: 400 }}>
            <InsightView
                insight={Md.Insights.Insight1}
                filters={filters}
            />
        </div>

        <button onClick={() => setFilters(filters2)}>Filter reset</button>
        <button onClick={() => setFilters([])}>Filter reset full</button>
        <button onClick={() => setFilters(socexFilter)}>Filter socex</button>

    </Page>;
};

export default Home;
