#include <jni.h>
#include "MyAwesomeModuleOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::myawesomemodule::initialize(vm);
}
