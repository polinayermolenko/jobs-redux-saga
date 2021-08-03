import React, { useEffect, useMemo } from "react";
import { PROVIDERS } from "modules/api/endpoints";
import useFetch from "hooks/useFetch";
import ProfileGrid from "components/common/ProfileGrid";
import { useSelector } from "react-redux";
import { selectAppState } from "modules/app/selectors";

export default function Providers() {
  const appState = useSelector(selectAppState);
  const { response, performFetch } = useFetch(PROVIDERS);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const { loading, data } = response;

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }

    if (appState.selectedJob === null) {
      return data;
    }

    return data.filter((employee) => employee.job === appState.selectedJob);
  }, [data, appState.selectedJob]);

  return <ProfileGrid profiles={filteredData} loading={loading} />;
}
