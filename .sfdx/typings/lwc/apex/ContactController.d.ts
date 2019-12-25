declare module "@salesforce/apex/ContactController.findAll" {
  export default function findAll(): Promise<any>;
}
declare module "@salesforce/apex/ContactController.findByName" {
  export default function findByName(param: {searchKey: any}): Promise<any>;
}
