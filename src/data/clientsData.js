
const clientsData = [
  {
    id: "a0c0dc67-0a6d-4eb4-b973-d21b1733a681",
    name: "mirikh",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/fb00cb08-2705-4158-8282-041a93ca7a6c-mirikh.png",
  },
  {
    id: "a2ea882d-f492-4b52-9a70-3cf94ceb5528",
    name: "qmpc",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/e32eb053-86a5-4631-9160-c529e78ba774-qmpc.jfif",
  },
  {
    id: "4b899037-89ff-4888-b971-d85321060813",
    name: "marriot",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/fae854cc-8be0-48fa-bc35-02fbd3f4ecdc-marriot.png",
  },
  {
    id: "877207f2-ac99-4c0f-afbe-7696bdfb0256",
    name: "nbk",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/1a927365-dda4-4e56-8950-92534104566d-nbk.jpeg",
  },
  {
    id: "ed6c990f-74a6-4757-943a-6e7a31bff2e8",
    name: "era",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/3df14d1a-7861-4adc-aaa8-4f71d1fdd635-era.jpg",
  },
  {
    id: "7ca16ee2-61b1-4d55-83ae-983321a3d301",
    name: "ali bin",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/5b9d5352-4b4d-44a8-ab7c-8aa0e105e9d4-ali%20bin.png",
  },
  {
    id: "5e95bdf3-a03e-4c36-8819-286ad0d78324",
    name: "tawar mall",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/9e5fc1e3-79c9-4b24-bdcc-8313dc9156d8-tawar%20mall.jpg",
  },
  {
    id: "67c6ed79-f9ce-4f2f-b05e-49ea3d990a23",
    name: "marine",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/f1b953df-6ef2-4cb0-8aff-9ef16076ac8e-marine.jpg",
  },
  {
    id: "c467cd34-3fb4-4be8-9716-eb1d7b71d8ed",
    name: "tea time",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/286b55aa-2d88-4466-9a6d-57dc3ef02024-tea%20time.jpg",
  },
  {
    id: "844f0609-6215-4cec-b91e-c62ef410ec50",
    name: "efs",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/e6ad9c0e-d9b3-4a15-9bca-3549b0fd24d6-efs.png",
  },
  {
    id: "e99fd67f-0894-492a-a220-0788e1003320",
    name: "my cookie",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/41a8d526-1326-48b7-bfdd-da66d496403b-my%20cookie.png",
  },
  {
    id: "16aab09c-ba81-41ca-97c1-b57defd66443",
    name: "imperial",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/d77a28eb-3508-4546-8887-9bc75a6f57b9-imperial.jpg",
  },
  {
    id: "5e3acddb-3877-4049-a046-3d412bc6817e",
    name: "havelock one",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/bdbc6618-af1d-45aa-9615-2434b3db4f7a-Havelock-One_logo-with-tagline_RGB_21102020-3.jpg",
  },
  {
    id: "91b7b6f1-2778-4a45-9650-487dba7cac8e",
    name: "getp",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/09943a34-88cd-41b3-afce-1a1cb61ee1cf-getp%20logo.png",
  },
  {
    id: "d9356caa-869e-4998-8b41-37e738954f28",
    name: "uae",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/99808a07-373a-4400-a637-ee1d8ca29e00-uae.jfif",
  },
  {
    id: "b763ed0a-57e4-44ac-811f-8615e5802643",
    name: "arrow head",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/87c3bd63-a8d6-4765-aeae-3dff6b83916d-Arrow-Head-Logo-New.png",
  },
  {
    id: "3706cc13-75cb-4446-b54a-cc71a61b3b1c",
    name: "neccoqatar",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/9d20a1a4-f6e9-4a5d-9c49-a1db812d833c-nemccoqatar_logo.jfif",
  },
  {
    id: "d999c937-1084-4904-a61d-c5a1d0b4da06",
    name: "tea stop",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/5cd3c9b4-38ef-4a85-9d8f-0f7524efcd4d-tea%20stop.png",
  },
  {
    id: "0a8f9eff-959c-4028-a302-ae5eb7978d09",
    name: "gwc",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/c9093ffa-beb2-473f-800a-a035794a764a-gwc-300x300-1.jpg",
  },
  {
    id: "2b52e80b-d80c-47c6-bd26-5ad0845bdf75",
    name: "al haramain",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/4a200d8d-d6f7-4d5c-8b0b-3e02f647d5ac-al%20haramain.jfif",
  },
  {
    id: "054112fa-3af8-4172-a37a-6055ebb6b972",
    name: "engie",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/82634ba0-345a-4d11-9337-8d3077788e5c-Logo-engie.svg.png",
  },
  {
    id: "6dfacf5f-f6c7-4d8d-837f-16ace7773802",
    name: "eec",
    logoUrl: "https://alafzah-assets-prod.s3.ap-south-1.amazonaws.com/clients/31ab930a-f97d-4643-a11b-590f30053135-eec.png",
  },
];


export default clientsData;