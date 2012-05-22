package com.phonegap;

import org.json.*;
import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;

public class Hello extends Plugin {
	@Override
    public PluginResult execute(String action, JSONArray args, String callbackId) {
    	if (action.equals("say"))
    		return new PluginResult(PluginResult.Status.OK, "hello world");
    	else 
    		return new PluginResult(PluginResult.Status.ERROR, "wtf mate!");
    }
	
	@Override
	public void onPause(boolean multitasking) {
		// save your state!
	}
    
	@Override
	public void onResume(boolean multitasking) {
		// retrieve your state!
	}
	
	@Override
    public boolean onOverrideUrlLoading(String url) {
    	// do something interesting here :)
    	return false;
    }
}