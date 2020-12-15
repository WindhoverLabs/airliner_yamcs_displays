var log_mode_val = display.getWidget('LOG_MODE').getValue();
Yamcs.issueCommand('/ocpoc/cfe_es/OverWriteSysLog', {
'Payload.Mode_arg': log_mode_val
});