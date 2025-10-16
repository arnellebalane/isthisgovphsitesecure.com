import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useSitesStore = defineStore('sites', () => {
  const sites = ref<Site[]>([]);

  const getSites = computed(
    () => () =>
      sites.value
        .map<Site>((site) => ({
          title: site.title,
          host: new URL(`${site.status !== 'INSECURE' ? `https` : `http`}://${site.host}`),
          status: site.status as SiteStatus,
          expiry: site.expiry ? new Date(site.expiry) : new Date(0),
        }))
        .sort((siteA, siteB) => siteB.expiry?.getTime() - siteA.expiry?.getTime())
        .sort((siteA, siteB) => siteB.status.localeCompare(siteA.status))
        .reverse()
  );

  const fetchSites = async () => {
    try {
      const response = await fetch('/src/data/sites.json');
      sites.value = await response.json();
    } catch (error) {
      console.error('Error fetching sites: ', error);
    }
  };

  return { sites, getSites, fetchSites };
});
