cd ios
pod cache clean --all
rm -rf Pods
rm -rf Podfile.lock
pod install
cd ..
