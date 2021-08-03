import React, { useEffect } from "react";
import Navigation from "components/common/Navigation";
import useFetch from "hooks/useFetch";
import { JOBS } from "modules/api/endpoints";

export default function Jobs() {
  const { response, performFetch } = useFetch(JOBS);
  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const { loading, data } = response;

  return (
    <Navigation
      loding={loading}
      services={data}
      title={"react + redux + redux-saga app"}
    />
  );
}
