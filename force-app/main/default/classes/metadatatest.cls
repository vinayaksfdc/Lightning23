public class metadatatest {
    public static void runUpdateLayouts(){        
        Metadata.Layout la = getLayout('Account-Account Layout');

        Metadata.LayoutSection sec = new Metadata.LayoutSection();
        sec.customLabel = true;
        sec.detailHeading = true;
        sec.editHeading = true;
        sec.label = 'Custom fields';
        sec.style = metadata.LayoutSectionStyle.OneColumn;

        Metadata.LayoutColumn col1 = new Metadata.LayoutColumn();

        Metadata.LayoutItem layoutField = new Metadata.LayoutItem();

        layoutField.field = 'testfield__c';
        layoutField.behavior = metadata.UiBehavior.Readonly;

        col1.layoutItems.add(layoutField);
        sec.layoutColumns.add(col1);

        la.layoutSections.add(sec);

        Metadata.DeployContainer dc = new Metadata.DeployContainer();
        dc.addMetadata(la);

        Id jobid = Metadata.Operations.enqueueDeployment(dc,null);
    }

    public static Metadata.Layout getLayout(String layoutName){
        List<String> layoutList = new List<String>{layoutName};
            List<Metadata.Metadata> components = Metadata.Operations.retrieve(Metadata.MetadataType.Layout, layoutList);
        return (Metadata.Layout)components[0];
    }
}