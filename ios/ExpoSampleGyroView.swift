import ExpoModulesCore

class ExpoSampleGyroView: ExpoView {
    let gyroView = GyroView()
    let onGyroEvent = EventDispatcher()
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        clipsToBounds = true
        addSubview(gyroView)
        gyroView.setEventDispatcher(onGyroEvent)
    }
    
    override func layoutSubviews() {
        gyroView.frame = bounds
    }
}
