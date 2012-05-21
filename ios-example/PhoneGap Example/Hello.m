#import "Hello.h"

@implementation Hello

- (void) say:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options
{
    NSString* callbackId = [arguments objectAtIndex:0]; // first item is the callbackId
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"hello world"];
    [super writeJavascript:[pluginResult toSuccessCallbackString:callbackId]];
}

@end