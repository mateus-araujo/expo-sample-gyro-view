import ExpoModulesCore

public class ExpoSampleGyroViewModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ExpoSampleGyroView")
        
        View(ExpoSampleGyroView.self) {
            Prop("placeholderText") { (view: ExpoSampleGyroView, text: String) in
                view.gyroView.setPlaceholderText(text)
            }
        }
    }
}
