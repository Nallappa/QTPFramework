//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Script
{
    using System;
    using System.Xml;
    using System.Xml.Schema;
    using System.Collections.Generic;
    using HP.ST.Fwk.RunTimeFWK;
    using HP.ST.Fwk.RunTimeFWK.CheckpointFWK;
    using HP.ST.Fwk.RunTimeFWK.Utilities;
    using HP.ST.Ext.CheckpointLogicOperators;
    using HP.ST.Ext.BindingImpl.Getters;
    using HP.ST.Ext.BindingImpl.Setters;
    using HP.ST.Fwk.RunTimeFWK.BindingFWK;
    using HP.ST.Fwk.RunTimeFWK.BindingFWK.Getters;
    using HP.ST.Fwk.RunTimeFWK.BindingFWK.Setters;
    using HP.ST.Fwk.RunTimeFWK.BindingFWK.PropInfo;
    
    
    public partial class WorkFlowScript
    {
        
        private void set_AddActivity4_checkpoints(STActivityBase activity)
        {
            // Checkpoint 1
            IVTDGetter actualValueGetter1 = new VTDObjectGetter(new VTDPropertyInfoBase("Result"));
            IVTDSetter actualValueSetter1 = new VTDCheckpointSetter(XmlTypeCode.Decimal);
            BindDirection actualBindDirection1 = new BindDirection(_flow.AddActivity4, actualValueGetter1, actualValueSetter1);
            CpValObj valueActualObject1 = new CpValObj(actualBindDirection1, XmlTypeCode.Decimal, false);


            CpValObj valueExpectedObject1 = new CpValObj(bind_dir18);
            ValueCPRule cpRule1 = new ValueCPRule(valueActualObject1, valueExpectedObject1, PrimitiveTypeCP.EqualTo, "=", false);
            activity.AddCheckpointRule(cpRule1);

        }
    }
}
